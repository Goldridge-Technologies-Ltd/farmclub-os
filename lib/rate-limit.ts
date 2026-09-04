export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

/*
  Best-effort, in-memory rate limiting. This resets whenever the serverless
  function cold-starts and is not shared across concurrent instances, so it
  will not stop a determined/distributed attacker — but it costs no extra
  infrastructure and blocks the common case of a script hammering an
  endpoint from one IP within a warm instance.
*/
export function createRateLimiter({
  windowMs,
  maxRequests,
  maxTrackedIps = 5000,
}: {
  windowMs: number;
  maxRequests: number;
  maxTrackedIps?: number;
}) {
  const requestTimestampsByIp = new Map<string, number[]>();

  return function isRateLimited(ip: string): boolean {
    const now = Date.now();

    if (requestTimestampsByIp.size > maxTrackedIps) {
      requestTimestampsByIp.clear();
    }

    const recent = (requestTimestampsByIp.get(ip) ?? []).filter(
      (timestamp) => now - timestamp < windowMs,
    );

    if (recent.length >= maxRequests) {
      requestTimestampsByIp.set(ip, recent);
      return true;
    }

    recent.push(now);
    requestTimestampsByIp.set(ip, recent);
    return false;
  };
}

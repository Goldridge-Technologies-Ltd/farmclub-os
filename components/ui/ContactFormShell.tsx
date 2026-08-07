type ContactFormShellProps = {
  enquiryTypes: string[];
};

export function ContactFormShell({ enquiryTypes }: ContactFormShellProps) {
  return (
    <form className="surface-panel grid gap-4 p-6" aria-label="Contact form preview">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-farm-green-950">
          Full name
          <input
            className="min-h-11 rounded-md border border-farm-border px-3 text-base font-normal"
            type="text"
            name="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-farm-green-950">
          Email address
          <input
            className="min-h-11 rounded-md border border-farm-border px-3 text-base font-normal"
            type="email"
            name="email"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-farm-green-950">
        Enquiry type
        <select
          className="min-h-11 rounded-md border border-farm-border px-3 text-base font-normal"
          name="enquiryType"
          defaultValue=""
        >
          <option value="" disabled>
            Select an enquiry type
          </option>
          {enquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-farm-green-950">
        Message
        <textarea
          className="min-h-32 rounded-md border border-farm-border p-3 text-base font-normal"
          name="message"
        />
      </label>
      <p className="text-sm leading-7 text-farm-muted">
        This reusable shell is ready for a future static-first contact page integration.
      </p>
    </form>
  );
}

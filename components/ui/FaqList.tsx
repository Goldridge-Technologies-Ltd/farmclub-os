type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="surface-panel divide-y divide-farm-border">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-farm-green-950">
            {item.question}
            <span
              aria-hidden="true"
              className="text-xl text-farm-green-700 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-7 text-farm-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

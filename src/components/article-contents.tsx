import Link from "next/link"

interface Section {
  topic: string;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  content_html?: string | null;
  id?: string | null;
}

type ArticleContentsProps = {
  sections?: Section[] | null,
  activeId: string
}

export function ArticleContents({ sections, activeId }: ArticleContentsProps) {

  return (
    <aside className="w-auto pt-10 hidden lg:block">
      <div className="sticky top-12 rounded-lg p-4">
        <h1 className="text-sm font-semibold pb-2">On this page</h1>
        {sections && sections.map((section, i) => (
          <Link href={`#${section.id}`} key={`contents-${section.id}`}>
            <h5 className={'text-xs hover:text-inherit text-neutral-600 dark:text-neutral-400 py-2'
              + ' ' + (activeId === `${section.id}` && "!text-primary")}>{section.topic}</h5>
          </Link>
        ))}
      </div>
    </aside>
  )
}
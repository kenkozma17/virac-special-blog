import Link from "next/link";
import IssueLink from "@/app/components/Blog/IssueLink";
export default function IssueSelector({ issue }) {
  const issues = [
    {
      issueNumber: 10,
      issueUrl: "/",
      issueName: "Eating",
      issueDate: "November 1, 2023",
      latest: true,
    },
    {
      issueNumber: 9,
      issueUrl: "/issue/9",
      issueName: "Planning",
      issueDate: "October 1, 2023",
      latest: false,
    },
  ];

  const selectedIssue = issues.find((i) => {
    if (issue) {
      return i.issueNumber == issue;
    } else {
      return i.latest;
    }
  });
  const previousIssues = issues.filter((i) => {
    if (issue) {
      return i.issueNumber != issue;
    } else {
      return i.latest === false;
    }
  });
  return (
    <div className="issues w-full flex justify-center">
      <div className="inline-block relative">
        <ul className="absolute left-0 bottom-0 transform -translate-x-full flex">
          {previousIssues.map((issue, index) => (
            <Link href={issue.issueUrl}>
              <li
                className="cursor-pointer group border-black border-opacity-30 
                hover:border-vs-red border-2 text-[1.3rem] mr-8 text-black hover:text-opacity-100 text-opacity-30"
              >
                <span className="border-r-2 border-black border-opacity-30 group-hover:border-vs-red px-2 py-1">
                  {issue.issueNumber}
                </span>
                <span className="px-2 py-1">{issue.issueName}</span>
              </li>
            </Link>
          ))}
        </ul>

        <IssueLink issue={selectedIssue} />
      </div>
    </div>
  );
}

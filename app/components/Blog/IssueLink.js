import Link from "next/link";
export default function IssueLink({ issue }) {
  return (
    <Link
      href={issue.issueUrl ? issue.issueUrl : "/"}
      className="cursor-pointer group hover:border-opacity-100 border-2
        border-vs-red border-opacity-75 inline-block"
    >
      <div className="issue grid grid-cols-2">
        <div
          className="border-r-2 group-hover:border-opacity-100
            border-vs-red border-opacity-75"
        >
          <div
            className="border-b-2 group-hover:border-opacity-100
              border-vs-red border-opacity-75 px-2 py-1 text-[1.3rem]"
          >
            Issue {issue.issueNumber}
          </div>
          <div className="px-2 py-1 text-[1.3rem]">{issue.issueDate}</div>
        </div>
        <div className="flex justify-center items-center text-[2rem] px-2 py-1">
          {issue.issueName}
        </div>
      </div>
    </Link>
  );
}

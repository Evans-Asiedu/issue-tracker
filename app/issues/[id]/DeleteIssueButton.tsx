import { Issue } from "@prisma/client";
import { Button } from "@radix-ui/themes";

interface Props {
  issue: Issue;
}

const DeleteIssueButton = ({ issue }: Props) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;

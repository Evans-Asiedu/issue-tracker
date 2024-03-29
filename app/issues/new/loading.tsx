import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

const LoadingIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IssueFormSkeleton;

import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../../ui/Filter";

function DashboardFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("last")) {
      searchParams.set("last", "7");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "Last 7 days" },
        { value: "30", label: "Last 30 days" },
        { value: "90", label: "Last 90 days" },
      ]}
    />
  );
}

export default DashboardFilter;

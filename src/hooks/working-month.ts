import useWorkingMonthStore from "@/store/working-month";

const useWorkingMonth = () => {
  const workingMonth = useWorkingMonthStore((state) => state.value);
  const workingMonthPrettie = useWorkingMonthStore(
    (state) => state.prettieValue
  );
  const setWorkingMonth = useWorkingMonthStore((state) => state.setValue);

  return {
    workingMonth,
    workingMonthPrettie,
    setWorkingMonth,
  };
};

export default useWorkingMonth;

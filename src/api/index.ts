export const fetchSteps = async (id: string) => {
  const response = await fetch("http://localhost:3000/steps?id=" + id);
  const data = await response.json();
  return { ...response, data: data[0] };
};

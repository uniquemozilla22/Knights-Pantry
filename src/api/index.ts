const fetchSteps = async (id: string) => {
  const response = await fetch("http://localhost:3000/steps/" + id);
  const data = response.json();
  return { ...response, data };
};

export default fetchSteps;

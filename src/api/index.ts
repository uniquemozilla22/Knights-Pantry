const fakeData = {
  steps: [
    {
      id: 2,
      title: "Here you Shop the most",
      image: "",
      content: [
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
      ],
      position: 2,
    },
    {
      id: 3,
      title: "Here you Shop the most",
      image: "",
      content: [
        {
          title: "Shopping here is fun",
          description:
            "  access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Shopping here is fun",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
      ],
      position: 2,
    },
    {
      id: 4,
      title: "Here you Shop the most",
      image: "",
      content: [
        {
          title: "Shopping here is fun",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
      ],
      position: 2,
    },
    {
      id: 5,
      title: "Here you Shop the most",
      image: "",
      content: [
        {
          title: "Shopping here is fun",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
        {
          title: "Here you Shop",
          description:
            " The Knights Pantry will provide all UB students access to non-perishable foods, snacks, and personal hygiene items free of charge. Students can access The Knights Pantry in two ways: ",
        },
      ],
      position: 2,
    },
  ],
};

export const getStep = async (id: string) => {
  let data;

  try {
    const response = await fetch("http://localhost:3000/steps?id=" + id);

    if (response.status === 200) {
      data = await response.json();
    } else {
      data = fakeData.steps.filter((step) => step.id === parseInt(id));
    }
  } catch (error) {
    data = fakeData.steps.filter((step) => step.id === parseInt(id));
  }

  return { data: data[0] };
};

export const getSteps = async () => {
  let data;
  try {
    const response = await fetch("http://localhost:3000/steps");
    if (response.status === 200) {
      data = await response.json();
    } else {
      data = fakeData;
    }
  } catch {
    data = fakeData;
  }

  return data;
};

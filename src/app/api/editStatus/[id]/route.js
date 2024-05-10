const getStatusById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/status/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch status");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditStatus({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
}
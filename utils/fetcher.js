const baseApiURL = process.env.EXPO_PUBLIC_API_URL;

export async function getNote(id) {
  try {
    console.log(`${baseApiURL}?id=${id}`);
    const response = await fetch(`${baseApiURL}?id=${id}`);
    const data = await response.json();

    return {
      id: id,
      content: data.note.content,
      created_timestamp: data.note.created_timestamp,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function createNote(content) {
  try {
    console.log(`${baseApiURL}`);
    const response = await fetch(`${baseApiURL}`, {
      method: "post",
      body: {
        content: content,
      },
    });
    const data = await response.json();

    return {
      content: content,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function updateNote(id, content) {
  try {
    console.log(`${baseApiURL}`);
    const response = await fetch(`${baseApiURL}`, {
      method: "put",
      body: {
        content: content,
        id: id,
      },
    });
    const data = await response.json();

    return {
      id: id,
      content: content,
    };
  } catch (error) {
    console.log(error);
  }
}

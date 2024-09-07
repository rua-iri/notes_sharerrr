export async function getNote(id) {
  try {
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem impedit est iste. ";
    const randInt = Math.round(Math.random() * 50);

    return {
      id: id,
      content: text.repeat(randInt),
    };
  } catch (error) {}
}

export async function createNote(id, content) {
  try {
    return {
      id: id,
      content: content,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function updateNote(id, content) {
  try {
    return {
      id: id,
      content: content,
    };
  } catch (error) {
    console.log(error);
  }
}

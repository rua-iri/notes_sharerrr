

export async function getNote(id) {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem impedit est iste. ";
  const randInt = Math.round(Math.random() * 50);

  return {
    id: id,
    content: text.repeat(randInt),
  };
}

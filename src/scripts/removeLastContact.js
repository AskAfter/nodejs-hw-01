import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const data = await readContacts();
  data.pop();
  await writeContacts(data);
};

removeLastContact();

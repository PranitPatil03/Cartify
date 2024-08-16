import { customAlphabet } from "nanoid";

const generateOrderId = customAlphabet("0123456789", 10);

export { generateOrderId };

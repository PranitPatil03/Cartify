export interface product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  isCart: boolean;
  mrp: number;
}

export interface CartItem extends product {
  quantity?: number;
}

export interface Order {
  id: string;
  date: Date;
  items: CartItem[];
  totalAmount: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  orders: Order[];
  clearCart: () => void;
  createOrder: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

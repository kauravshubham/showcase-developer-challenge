export default function generateToken() {
  return {
    id: `${Math.random().toString(36).substr(2)}`,
    token: `${Math.random().toString(36).substr(2)}`,
  };
}

interface Props {
  name: string;
  quantity: number;
}

export default function MedicineItem({ name, quantity }: Props) {
  return (
    <div className="medicine-item">
      <span>{name}</span>
      <span className="medicine-qty">{quantity}</span>
    </div>
  );
}
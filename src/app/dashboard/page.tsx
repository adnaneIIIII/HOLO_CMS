import Usercard from "./_components/Usercard";

export default function page() {
  return (
    <div className="p-4 flex gap-4 flex-col">
      {/* left */}
      <div className="w-full lg:w-full">
        <Usercard type="users" />
      </div>

      {/* left */}
    </div>
  );
}

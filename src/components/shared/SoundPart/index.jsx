function SoundPart({ sound }) {
  return (
    <div className="flex items-center justify-center p-2 my-4 bg-gray-100 rounded-md shadow-md">
      <audio controls className="w-full max-w-md">
        <source src={sound} type="audio/mpeg" />
      </audio>
    </div>
  );
}
export default SoundPart;

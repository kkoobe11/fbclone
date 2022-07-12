function Button({ Icon, title, color }) {
  return (
    <div className="h-12 flex items-center space-x-2 p-4 hover:bg-gray-100 rounded-xl cursor-pointer px-8">
      {Icon}
      <p className="hidden sm:inline-flex font-semibold text-gray-500">
        {title}
      </p>
    </div>
  );
}

export default Button;

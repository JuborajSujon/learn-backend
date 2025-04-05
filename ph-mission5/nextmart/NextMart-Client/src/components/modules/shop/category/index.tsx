import CreateCategoryModal from "./CreateCategoryModal";

const ManageCategories = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Manage Categories</h1>
        <CreateCategoryModal />
      </div>
    </div>
  );
};

export default ManageCategories;

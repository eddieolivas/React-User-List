const AddUser = () => {
  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" />

        <label>Age (Years)</label>
        <input type="number" />

        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
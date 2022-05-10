const Textarea = (props) => {
  return (
    <div className="form-white mb-3">
      <textarea
        className="form-control form-control-lg bg-dark text-white"
        {...props}
      />
    </div>
  );
};
export default Textarea;

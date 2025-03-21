import { ClipLoader as _ClipLoader } from "react-spinners";

export default function ClipLoader() {
  return (
    <_ClipLoader
      color="#FFFFFF"
      loading={true}
      className="block my-0 mx-auto border-red-500"
      size={22}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

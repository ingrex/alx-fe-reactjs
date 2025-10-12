import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="text-center mt-6">
      <h1 className="text-3xl font-bold text-blue-600">Blog Post #{id}</h1>
      <p className="mt-2 text-gray-600">Dynamic route content for post {id}.</p>
    </div>
  );
}

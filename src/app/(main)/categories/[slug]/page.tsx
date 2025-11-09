// "use client";

// import React, { use } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
// }

// interface CategoryPageProps {
//   params: Promise<{ slug: string }>; // params is now a Promise
// }

// export default function CategoryPage({ params }: CategoryPageProps) {
//   // ✅ unwrap params using React.use()
//   const { slug } = use(params);

//   // ✅ Access Redux mainCategories
//   const mainCategories = useSelector(
//     (state: RootState) => state.categories.mainCategories
//   );

//   // Find category based on slug
//   const category = mainCategories.find(
//     (c) => encodeURIComponent(c.name.toLowerCase()) === slug
//   );

//   if (!category)
//     return (
//       <p className="p-4 mt-80 text-center text-lg">Category not found</p>
//     );

//   // Placeholder products
//   const placeholderProducts: Product[] = [
//     { id: 1, name: "Placeholder Product 1", description: "This is a placeholder product." },
//     { id: 2, name: "Placeholder Product 2", description: "This is a placeholder product." },
//     { id: 3, name: "Placeholder Product 3", description: "This is a placeholder product." },
//   ];

//   return (
//     <div className="p-4 mt-80">
//       <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {placeholderProducts.map((product) => (
//           <div key={product.id} className="card p-4 bg-white rounded shadow">
//             <h2 className="text-lg font-semibold">{product.name}</h2>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// app/categories/[slug]/page.tsx
import { categories } from "@/data/categories";

interface Product {
  id: number;
  name: string;
  description: string;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>; // params is now a Promise
}) {
  const { slug } = await params; // ✅ unwrap the Promise

  const category = categories.find(
    (c) => encodeURIComponent(c.name.toLowerCase()) === slug
  );

  if (!category)
    return <p className="p-4 mt-80 text-center text-lg">Category not found</p>;

  const placeholderProducts: Product[] = [
    { id: 1, name: "Placeholder Product 1", description: "This is a placeholder product." },
    { id: 2, name: "Placeholder Product 2", description: "This is a placeholder product." },
    { id: 3, name: "Placeholder Product 3", description: "This is a placeholder product." },
  ];

  return (
    <div className="p-4 mt-80">
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {placeholderProducts.map((product) => (
          <div key={product.id} className="card p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

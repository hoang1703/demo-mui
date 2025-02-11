// import styles from "./page.module.css";
// import Menu1 from "@/lib/components/menu";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Menu1 />
//       </main>
//     </div>
//   );
// }

import FileSlider from "../lib/components/slider.jsx";

const ExamplePage = () => {
  const files = [
    { name: "image.jpg", url: "/image.jpg" },
    { name: "video.mp4", url: "/video.mp4" },
    { name: "document.pdf", url: "/path/to/document.pdf" },
    // Add more files...
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">File Viewer</h1>
      <FileSlider files={files} />
    </div>
  );
};

export default ExamplePage;

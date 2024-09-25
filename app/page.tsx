import Link from "next/link"
import ProductCard from "./components/ProductCard"

const page = () => {
  return (
    <div>
      <nav>
        <Link className="px-2" href="/users">Home</Link> 
        <Link href="/users/newpage">About</Link>
        <ProductCard/>
      </nav>
    </div>
  )
}

export default page
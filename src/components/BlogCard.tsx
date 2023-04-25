import Link from "next/link";

export function BlogCard({ title, author, coverPhoto, datePublished, slug }) {
    return (
        <div>
            <Link href={"/posts/" + slug}>
                <div>
                    <img src={coverPhoto.url} alt="" />
                </div>
            </Link>
            
            <div className="">
                <h2>{title}</h2>
                <div className="">
                    <div>
                        <img src={author.avatar.url} alt="" />
                        <h3>{author.name}</h3>
                    </div>
                    <div className="">
                        <h3>{datePublished}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}
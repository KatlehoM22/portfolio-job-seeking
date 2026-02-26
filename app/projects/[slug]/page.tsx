type Props = { params: { slug: string } };

export default function ProjectDetailPage({ params }: Props) {
    return (
        <main>
            <h1>Project: {params.slug}</h1>
            <p>Details about the project will go here.</p>
        </main>
    );
}
export default function SectionHeader({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="text-center">
            <h2 className="big-heading font-semibold">{title}</h2>
            {description && (
                <p className="text-foreground-muted">{description}</p>
            )}
        </div>
    );
}

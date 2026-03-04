

interface TagProps {
    label: string;
}

const Tag = ({ label }: TagProps) => {
    return (
        <span className="tag">{label}</span>
    );
};

export default Tag;

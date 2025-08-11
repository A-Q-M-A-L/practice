export default function HR ({color, center = false}) {
    return (
        <div className={`h-[2px] w-[100px] autoShow ${center ? 'mx-auto' : undefined} mb-3 rounded-full bg-[${color}]`} />
    )
}
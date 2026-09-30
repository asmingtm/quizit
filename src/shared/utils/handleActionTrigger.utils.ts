export function handleActionTrigger(e: React.MouseEvent, index: number) {
    e.preventDefault();
    console.log("clicked", index)
    console.log(e.target);
}
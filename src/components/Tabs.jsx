export default function Tabs(){
    return(
        <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleClick("Components")}
        ></TabButton>
        </menu>
    )
}
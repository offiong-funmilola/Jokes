export type JokeType = {
    id: string,
    type: string,
    setup: string,
    punchline: string
}[]

export type ItemType = {
    id: string,
    type: string,
    setup: string,
    punchline: string
}

export type ContextType = {
    select : JokeType;
    setSelect: React.Dispatch<React.SetStateAction<JokeType>>,
}
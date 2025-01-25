export type project = {
    name: string,
    role: string,
    description: string,
    key_features: string[],
    stack: string[],
    launch_date: string,
    launched: boolean,
    client: string|undefined,
    server: string|undefined,
    website: string|undefined,
    photos: string[]
}
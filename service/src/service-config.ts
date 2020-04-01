import packageJson from "./../package.json";

const config = {
    name: packageJson.name,
    version: packageJson.version,
    port: packageJson.server.port
}

export default config;
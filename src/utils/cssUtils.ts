export function addPro(
  pro: string,
  name: string,
  isselector: boolean = true
): string {
  if (isselector) {
    return pro + '-' + name
  }
  return pro + '-' + name
}

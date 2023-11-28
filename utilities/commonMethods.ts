export class CommonMethods {

    public static generateRandomString(count: number) {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
      for (let i = 0; i < count; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
  
    public static generateRandomNumber(count: number):string {
      let text = '';
      const possible = '123456789';
  
      for (let i = 0; i < count; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }
}
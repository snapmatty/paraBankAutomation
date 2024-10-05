import { Page, Locator } from '@playwright/test';
export class BasePage {

    readonly page: Page;
    readonly head: Locator;
    readonly body: Locator;

constructor(page: Page) {
    this.page = page;
    this.head = page.locator('head');
    this.body = page.locator('body');
}

async fillInput(label: string, text: string){
    const input = await this.page.getByLabel(label);
    await input.fill(text);
}

async clickButton(buttonName: string){
    const button = await this.page.getByRole('button', {name: buttonName});
    await button.click();
}

async waitForAnimation(timeout: number = 3000) {
    await this.page.waitForTimeout(timeout);
}

async goto(path: string = '/') {
    await this.page.goto(path);
}

}
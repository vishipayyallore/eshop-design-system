import { NgModule } from "@angular/core"
import ButtonComponent from "./components/button/button.component";
import { HeaderModule } from "./components/header/header.module";

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [HeaderModule],
})
export class DesignSystemModule {}

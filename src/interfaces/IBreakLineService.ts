import { IBreakLineProps } from "../models/IBreakLineProps";

interface IBreakLineService {
  execute(breakLine: IBreakLineProps): string;
}

export default IBreakLineService;
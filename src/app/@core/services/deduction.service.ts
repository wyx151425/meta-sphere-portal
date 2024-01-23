import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {DeductionGroup} from "../../@shared/models/deduction-group";
import {MSResponse} from "../../@shared/models/m-s-response";

@Injectable({
  providedIn: 'root'
})
export class DeductionService {

  private deductionsUrl: string = "api/portal/deductions";

  constructor(private httpClient: HttpClient) {
  }

  public createDeductionGroup(deductionGroup: DeductionGroup): Observable<MSResponse<DeductionGroup>> {
    const url = `${this.deductionsUrl}/groups/create`;
    return this.httpClient.post<MSResponse<DeductionGroup>>(url, deductionGroup);
  }

  public joinDeductionGroup(deductionGroupCode: string): Observable<DeductionGroup> {
    const url = `${this.deductionsUrl}/groups/join`;
    return this.httpClient.put<DeductionGroup>(url, deductionGroupCode);
  }
}

/*
 * SPDX-FileCopyrightText: 2013 Pieroxy <pieroxy@pieroxy.net>
 *
 * SPDX-License-Identifier: MIT
 */

import { describe } from "vitest";
import { compressToUTF16, decompressFromUTF16 } from ".";
import { runTestSet } from "../__tests__/testFunctions";

describe("UTF16", () => {
    /** Known output for UTF16 compression */
    const test_tattooUTF16 =
        "\u0462\u5C33\u414C\u0780\u7320\u1025\u6063\u0230\u3DBB\u51A0\u3496\u40F6\u3C26\u3A05K\u00C6\u01AC\u0870\u04F4\u7AA8\u00D0\u5731\u7DC5\u6D24\u0441\u25AE\u0934\u1E20\u5B71\u1070\u6CE0\u2930\u0093\u22A4\u2177\u1863\u152AV\u4D44\u54B3\u37F3\u4024\u2534\u456C\u0D3C\u7344\u18D2\u4702\u45C0\u0393\u36A4\u60B5\u486C\u5241\u282C\u4648\u2890\u1059\u3DA7\u55EA\u0FA0\u03C3\u4020\u555D\u2706\u4B8B\u2DCE\u492C\u0620\u0517\u31C2\u44F8\u6820\u3336\u0481\u1DF3\u6024\u3363\u5284\u01E8\u24BA\u4CF1\u15BC\u0A2A\u5B4B\u4749@\u7312\u2C61\u74D6\u0164\u00E1\u402E\u7606\u32B2\u08A9\u48F9\u394E\u6E25\u147C\u5F67\u2456\u4337\u5958\u5051\u78B4\u1D7C\u149A\u6DFA\u37E5\u4A8F\u1170\u1890\u2728\u1124\u1CD3\u26E9\u137B\u028C\u39C0\u31E0\u7D86\u1A28\u1F0D\u4022\u5440\u1738\u0F90\u218A\u1220\u0844\u7970\u7020\u0C7F\u2359\u20F6\u28B8\u43A1\u564E\u26B2\u6430\u7D08\u1CA2\u03F2\u3490\u39B0\u1364\u3C61\u28ED\u0323\u7044\u397B\u1661\u40D6\u1F36\u04FA\u1236\u15A6\u6758\u29FD\u35A5\u63A0\u64C6\u3430\u622B\u430C\u2F3F\u1249\u45B7\u3A2D\u01A8\u0092\u0A48\u6103\u1859\u14D9\u6907\u7256\u2635\u08C2\u1060\u5EB8\u5741\u498E\u3FB1\u00F3\u4029\u183E\u2520\u2020\u5A41\u4482\u5545\u1CF4\u57E0\u63A4\u2271\u0223\u01A0\u2856\u0CC6\u6054\u4D69\u55C6\u5931\u0B37\u16F2\u0408\u1704\u1B8F\u02E7\u1B8A\u4DAE\u1899\u4571\u0644\u3021\u6ACC\u08B7\u2A8B\u52A2\u2F31\u0361\u60BA\u1239\u2321\u6E05\u2590\u61B7\u2EA2\u73BF\u2700\u4467\u2152\u34E9\u7F0C\u0520\u18CB\u406A\u2E2C\u2A41\u7439\u1628\u38CA\u3497\u2D2C\u0D8C\u5897\u094E\u5DE2\u4634\u0D7F\u4F2C\u7D72\u0327\u63C1\u4040\u3C27\u48E5\u50D2\u1426\u570B\u3CFA\u366F\u4B80\u2474\u24F0\u5049\u6DAC\u734E\u00C0\u0A25\u3521\u06E3\u6CBE\u1129\u00A1\u684C\u6DBA\u5739\u02F1\u508E\u4D18\u2836\u28B9\u208C\u4872\u3676\u4622\u4C82\u2213\u734D\u03C2\u7042\u0679\u3B30\u0892\u1453\u63F9\u583F\u0DAB\u3A98\u1D20\u0A2A\u6E40\u0465\u0330i\u08A0\u28EC\u1807\u018B\u32A0\u6134\u26EC\u34F0\u06A4\u2068\u2202\u5C8A\u2834\u6283\u260C\u0A0E\u2C2C\u5CF8\u1D2F\u4240\u7320\u21AA\u283E\u19D4\u0B34\u2380\u6921\u22B0\u1537\u6058\u7F6C\u52F4\u1E2D\u68C9\u0829\u51D7\u0D22\u124D\u0AEB\u7118\u1DCE\u2348\u69AE\u40D2\u1464\u0020\u0020";

    runTestSet(compressToUTF16, decompressFromUTF16, test_tattooUTF16);
});

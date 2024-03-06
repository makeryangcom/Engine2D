/**
#*****************************************************************************
# @file    header.go
# @author  MakerYang(https://www.makeryang.com)
# @statement 免费课程配套开源项目，任何形式收费均为盗版
#*****************************************************************************
*/

package Utils

import "strings"

func CheckUserAgent(userAgent string) bool {
	Status := false

	if strings.Contains(userAgent, "GodotEngine") {
		Status = true
	}

	return Status
}

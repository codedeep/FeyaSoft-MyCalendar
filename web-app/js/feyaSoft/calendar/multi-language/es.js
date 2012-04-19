/**
 * CubeDrive MyCalendar
 * Copyright(c) 2006-2012, FeyaSoft Inc. All right reserved.
 * info@cubedrive.com
 * http://www.cubedrive.com
 *
 * Please read license first before your use myCalendar, For more detail
 * information, please can visit our link: http://www.cubedrive.com/myCalendar
 *
 * You need buy one of the Feyasoft's License if you want to use MyCalendar in
 * your commercial product. You must not remove, obscure or interfere with any
 * FeyaSoft copyright, acknowledgment, attribution, trademark, warning or
 * disclaimer statement affixed to, incorporated in or otherwise applied in
 * connection with the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
Ext.ns("Ext.ux.calendar");

Ext.ux.calendar.Language = {

    // please help to transfer words after :. Thanks
    'CalendarWin':{
        'title':'CubeDrive MyCalendar 2.5.5',
        'loadMask.msg':'Por favor, espere...'
    },

    'MainPanel':{
        'loadMask.msg':'Por favor, espere...'
    },

    'SharingPopup':{
        'title':'Calendario compartido'
    },

    'CalendarContainer':{
        'todayBtn.text':'Hoy',
        'dayBtn.text':'Vista diaria',
        'weekBtn.text':'Vista semanal',
        'monthBtn.text':'Vista mensual',
        'weekMenu.showAll.text':'Mostrar todo',
        'weekMenu.onlyWeek.text':'Lunes a Viernes',
        'monthMenu.showAll.text':'Mostrar todo',
        'monthMenu.onlyWeek.text':'Lunes a Viernes',
        'moreMenu.setting.text':'Configuraci&oacute;n',
        'moreMenu.about.text':'Acerca de CubeDrive MyCalendar',
        'moreBtn.text':'M&aacute;s',
        'searchCriteria.text':'B&uacute;squeda',
        'moreMenu.showAlert.text':'Activar funci&oacute;n de alerta',
        'moreMenu.language.text':'Configuraci&oacute;n del lenguaje'
    },

    'WestPanel':{
        'myCalendarPanel.title':'My Calendar',
        'otherCalendarPanel.title':'Otro calendario',
        'myShowAllBtn.text':'Mostrar todo',
        'myAddBtn.text':'Nuevo'
    },

    'EventHandler':{
        'showOnlyItem.text':'Mostrar solo este',
        'viewItem.hide.text':'Ocultar calendario',
        'viewItem.show.text':'Mostrar calendario',
        'editItem.text':'Editar calendario',
        'deleteItem.text':'Eliminar calendario',
        'clearItem.text':'Vaciar calendario',
        'wholeDay':'Todo el día',
        'untitled':'Sin t&iacute;tulo',
        'unlockItem.text':'Desbloquear',
        'lockItem.text':'Bloquear',
        'editEvent.title':'Editar Evento',
        'deleteEvent.title':'Eliminar Evento',
        'more':'Mas',
        'deleteRepeatPopup.title':'Confirmar',
        'deleteRepeatPopup.msg':'Click "Yes" to delete all this repeat events, or click "No" to only delete the current event?',
        'updateRepeatPopup.title':'Confirmar',
        'updateRepeatPopup.msg':'Click "Yes" to update for all this repeat events, or click "No" to only update for the current event?',
    'clearItemPopup.title':'Confirmar',
	'clearItemPopup.msg':'Quieres realmente borrar todas las tareas de este calendario?',
	'deleteCalendarPopup.title':'Confirmar',
	'deleteCalendarPopup.msg':'Quieres realmente borrar este calendario?',
        'shareItem.text':'Compartir Calendario'
    },

    'Editor':{
        'startDayField.label':'Inicio',
        'endDayField.label':'Hasta',
        'wholeField.label':'D&iacute;a completo',
        'subjectField.label':'Asunto',
        'contentField.label':'Contenido',
        'calendarField.label':'Calendario',
        'alertCB.label':'Alarma al activar',
        'lockCB.label':'Protegido',
        'deleteBtn.text':'Eliminar',
        'saveBtn.text':'Guardar',
        'cancelBtn.text':'Cancelar',
        'new.title':'Nuevo Evento',
        'edit.title':'Editar evento',
        'repeatTypeField.label':'Tipo de repetici&oacute;n',
        'repeatIntervalField.label':'Ocurre cada ',
        'intervalUnitLabel.day.text':' D&iacute;a(s) ',
        'intervalUnitLabel.week.text':' Semana(s) ',
        'intervalUnitLabel.month.text':' Mes(es) ',
        'intervalUnitLabel.year.text':' A�o(s) ',
        'detailSetting':'Modificar detalle...',
        'returnBtn.text':'Volver',
        'startAndEnd':'Inicio y fin',
        'repeatStartField.label':'Inicio',
        'repeatNoEndRG.label':'No antes de',
        'repeatEndTimeRG.label':'Finalizar despu&eacute;s de',
        'repeatEndDateRG.label':'Finalizar en',
        'repeatEndTimeUnit':'ocurrencia(s)',
        'weekCheckGroup.label':'D&iacute;a de repetici&oacute;n',
        'monthRadioGroup.label':'Repetir por',
        'repeatByDate':'Fecha',
        'repeatByDay':'D&iacute;a',
        'alertLabel':'Configuraci&oacute; de Aviso',
        'alertEarly.label':'Antes',
        'newAlertBtn.text':'Nuevo',
        'deleteAlertBtn.label':'Quitar',
        'emailAlertEarlyInvalid':'The early time of Email Alert should be larger than 30 minutes.',
        'popupAlertEarlyInvalid':'The early time of Popup Alert should be less than 24 hours.',
        'repeatIntervalInvalid':'This value should be a positive integer!',
        'repeatBeginDayInvalid':'The repeat start date should not be later than repeat end date',
        'repeatEndDayInvalid':'The repeat end date should not be earlier than repeat start date',
        'repeatTimeInvalid':'This value should be a positive integer!'
    },

    'CalendarEditor':{
        'new.title':'Nuevo calendario',
        'edit.title':'Editar Calendario',
        'nameField.label':'Nombre',
        'descriptionField.label':'Descripci&oacute;n',
        'clearBtn.text':'Limpiar',
        'saveBtn.text':'Guardar',
        'cancelBtn.text':'Cancelar',
        'returnBtn.text':'Volver',
        'shareCalendar':'Compartir el calendario',
        'shareColumns.user':'Usuario',
        'shareColumns.permit':'Permiso',
        'shareColumns.add':'Agregar usuario para compartir',
        'shareColumns.remove':'Eliminar',
        'userField.emptyText':'Por favor ingrese el nombre de usuario o su email'
    },

    'ExpirePopup':{
        'hideCB.label':'No mostrar más avisos',
        'title':'Avisos de Eventos',
        'tpl.calendar':'Calendario',
        'tpl.subject':'Nombre',
        'tpl.content':'Observaciones',
        'tpl.leftTime':'Tiempo restante',
        'hour':'Horas(s)',
        'minute':'Minuto(s)',

        'untitled':'Sin titulo',
        'noContent':'Sin Contenido',
        'cancelReminder':'CANCELAR',
        'editEvent':'EDITAR'
    },

    'SettingPopup':{
        'title':'Configuraci&oacute;n del calendario',
        'hourFormatField.label':'Formato de la hora',
        'dayFormatField.label':'Formato del d&iacute;a para la vista diaria',
        'weekFormatField.label':'Formato del d&iacute;a para la vista semanal',
        'monthFormatField.label':'Formato del d&iacute;a para la vista mensual',
        'applyBtn.text':'Aplicar',
        'resetBtn.text':'Restaurar',
        'closeBtn.text':'Cerrar',
        'fromtoFormatField.label':'Formato De',
        'scrollStartRowField.label':'Fila de inicio para desplazamiento',
        'languageField.label':'Lenguaje',
        'generalForm.title':'General',
        'dwViewForm.title':'Vista diaria|Vista semanal',
        'monthViewForm.title':'Vista mensual',
        'createByDblClickField.label':'Crear evento por doble click',
        'singleDayField.label':'Evento d&iacute;as m&uacute;ltiples',
        'weekStartDayField.label': 'D&iacute;a de inicio de la semana',
        'activeStartTimeField.label':'Hora de inicio',
        'activeEndTimeField.label':'Hora de t&eacute;rmino',
        'hideInactiveTimeField.label':'Esconder horario fuera de rango',
        'readOnlyField.label':'S&oacute;lo lectura',
        'intervalField.label':'Intervalo de tiempo',
        'startEndInvalid':'Hora de inicio  debe ser anterior a la hora de t&eacute;rmino!',
        'formatInvalid':'Ejemplo: 09:00',
        'initialViewField.label':'Vista Inicial'
    },

    'ResultView':{
        'cm.date':'Fecha',
        'cm.calendar':'Calendario',
        'cm.time':'Hora',
        'cm.subject':'Asunto',
        'cm.content':'Contenido',
        'cm.expire':'Tiempo restante',
        'groupBtn.group.text':'Agrupar',
        'groupBtn.unGroup.text':'Desagrupar',
        'returnBtn.text':'Volver',
        'hour':'Hora(s)',
        'noSubject':'(Sin asunto)',
        'noContent':'(Sin contenido)',
        'loadMask.msg':'Por favor, espere...'
    },

    'DayView':{
        'loadMask.msg':'Por favor, espere...',
        'addItem.text':'Nuevo Evento',
        'events':'eventos'
    },

    'MonthView':{
        'loadMask.msg':'Por favor, espere...',
        'overview':'Overview',
        'showingEvents':'Showing Events',
        'totalEvents':'Total Events',
        'dayPre':'',
        'addItem.text':'Nuevo Evento',
        'clearItem.text':'Clean Event',
        'cutItem.text':'Cortar',
        'copyItem.text':'Copiar',
        'pasteItem.text':'Pegar',
        'events':'events'
    },

    'Mask':{
        '12Hours':'12 Horas',
        '24Hours':'24 Horas',
        'ar': 'Arabic',
        'de': 'German',
        'en':'American English',
        'es': 'Español',
        'fr': 'Français',
        'it': 'Italiano',
        'ja': 'Japanese',
        'lt': 'Lietuvių',
        'nl': 'Nederlandse',
        'pl': 'Polski',
        'pt': 'Portuguese',
        'ru': 'Russian',
        'zh_CN':'简体中文',
        'enable':'Activado',
        'disable':'Desactivado',
        'minute':'Minutos',
        'monday':'Lunes',
        'sunday':'Domingo',
        'permitData':[
            [0, 'Lectura, Escritura y Compartir'],
            [1, 'Lectura y Escritura'],
            [2, 'Solo lectura']
        ],
        'alertType':[
            ['popup', 'Mensaje Emergente'],
            ['email', 'Email']
        ],
        'popupAlertUnit':[
            ['minute', 'Minuto(s)'],
            ['hour', 'Hora(s)']
        ],
        'alertUnit':[
            ['minute', 'Minuto(s)'],
            ['hour', 'Hora(s)'],
            ['day', 'Dia(s)'],
            ['wek', 'Semana(s)']
        ],
        'initialView':[
            [0, 'Vista Diaria'],
            [1, 'Vista Semanal'],
            [2, 'Vista Mensual'],
        ]
    },

    repeatType:[
        ['no', 'Sin Repetición'],
        ['day', 'Diaria'],
        ['week', 'Semanal'],
        ['month', 'Mensual'],
        ['year', 'Anual']
    ],

    getWeekDayInMonth:function(date){
        var d = Ext.Date.format(date,'d');
        var w = Math.floor(d/7)+1;
        var wd = Ext.Date.format(date,'l');
        var str = 'the '+w;
        if(1 == w){
            str += 'st';
        }else if(2 == w){
            str += 'nd';
        }else if(3 == w){
            str += 'rd';
        }else{
            str += 'th';
        }
        return str+' '+wd;
    },

    getIntervalText:function(rtype, intervalSlot){
        var str = '';
        if('day' == rtype){
            if(1 == intervalSlot){
                str = 'Cada d&iacute;a';
            }else{
                str = 'Cada '+intervalSlot+' dias';
            }
        }else if('week' == rtype){
            if(1 == intervalSlot){
                str = 'Cada semana el ';
            }else{
                str = 'Cada '+intervalSlot+' semanas el ';
            }
        }else if('month' == rtype){
            if(1 == intervalSlot){
                str = 'Cada mes el ';
            }else{
                str = 'Cada '+intervalSlot+' meses el ';
            }
        }else if('year' == rtype){
            if(1 == intervalSlot){
                str = 'Cada a&ntilde;o el ';
            }else{
                str = 'Cada '+intervalSlot+' a&ntilde;os el ';
            }
        }
        return str;
    }
};

Ext.apply(Ext.ux.calendar.Mask, Ext.ux.calendar.Language);
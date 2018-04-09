let variables = {
	title6kV: document.querySelector('#area-6kV'),
	link6kV: document.querySelector('#area-text-6kV'),
	arr6kV: [],

	title500V: document.querySelector('#area-500V'),
	link500V: document.querySelector('#area-text-500V'),
	arr500V: [],

	title400V: document.querySelector('#area-400V'),
	link400V: document.querySelector('#area-text-400V'),
	arr400V: [],

	title230V: document.querySelector('#area-230V'),
	link230V: document.querySelector('#area-text-230V'),
	arr230V: [],

	titleSterowanie: document.querySelector('#area-sterowanie'),
	linkSterowanie: document.querySelector('#area-text-sterowanie'),
	arrSterowanie: [],

	machines: [ /*Rozdzielnie 6kV*/
				/*Nowe nazewnictwo*/
				"r-11", "r-11.1", "r-11.2", "r-12", "r-12.1", "r-12.2", "r-13", "r-13.1", "r-13.2", "r-14", "r-14.1", "r-14.2",
				"r-15", "r-16", "r-16.1", "r-16.2", "r-17", "r-17.1", "r-17.2", "r-18.3", "r-15", "r-5.2", "r-4.3", "r-3.3", "r-3.2","schemat sieci", 
				/*Stare nazewnictwo*/
				"rwn-11", "rwn-11.1", "rwn-11.2", "rwn-12", "rwn-12.1", "rwn-12.2", "rwn-13", "rwn-13.1", "rwn-13.2", "rwn-14", "rwn-14.1", "rwn-14.2",
				"rwn-15", "rwn-16", "rwn-16.1", "rwn-16.2", "rwn-17", "rwn-17.1", "rwn-17.2", "rwn-18.3", "rwn-15", "rwn-5.2", "rwn-4.3", "rwn-3.3", "rwn-3.2", 
				/*Rozdzielki 500V*/
				"rnn-11.1", "rnn-11.2 I", "rnn-12.1", "rnn-12.2 I", "rnn-13.1", "rnn-13.2 I", "rnn-13.2 II", "rnn-14.1", "rnn-14.2 II",
				"rnn-16.1", "rnn-16.2 I", "rnn-16.2 II", "rnn-17.1", "rnn-17.2 II", "rnn-4.3", "rg-wr warsztaty główne", "rg-1 magazyn odczynników",
				"irnn-3.3", "irnn-3.2", "iirnn-3.3", "iirnn-3.2", "rnn-10.1", "rmf-500V", "rmk-500V", "rp-51", "rpo-1.1", "rpo-1.2",
				"rpo-3.1", "rpo-3.2", "rpo-4.1", "rpo-4.2", "rzk-1", "rzk-1.1", "rzk-1.1.1", "rzk-1.2",
				/*Rozdzielki 500V siłowe*/
				/*Flotacja*/
				"irf-3.1", "irf-3.2", "irf-3", "irf-51", "irf-pd1",
				"iirf-22", "iirf-51", "iirf-52",
				"iiirf-5", "rw-51", "szafa prób",
				/*Młynownia*/
				"irm-1", "irm-2", "irm-3", "irm-3.1", "irm-3.2", "irm-6", "irm-7", "irm-8", "irm-9", "irm-10", "irm-11", "irm-12", "irm-13", "irm-14", "irm-52", "irm-53", "sspo",
				"iirm-1", "iirm-2", "iirm-3", "iirm-4", "iirm-5", "iirm-6", "iirm-7", "iirm-9", "iirm-51", "iirm-52",
				"iiirm-3", "iiirm-4", "iiirm-4.1", "zasil. syst. monitoringu wizyjnego na WT-53 i 54",
				/*Przepompownia*/
				"rp-51.1", "rp-51.1.1", "rp-51.3", "rp-51.3.1",
				/*Rozdrabialnia*/
				"rr-1", "rr-1.1", "rr-3", "rr-4", "rr-4.1", "rr-5", "rr-5.1", "rr-9", "rr-10", "rr-11", "rr-11.1", "rr-11.2", "rr-11.3", "rr-11.4",  "rr-11.5",
				"rr-12", "rr-13", "rr-13.1", "rr-14", "rr-15", "rr-15.1", "rr-16", "rr-17", "rr-18",
				/*Suszarnia*/
				"rs-1", "rs-1.1", "rs-1.1.1", "rs-2", "rs-2.1", "rs-3", "rs-3.1", "rs-4", "rs-4.1", "rs-4.1.1", "rs-5", "rs-6", "rs-8",
				"rs-12", "rs-12.1", "rs-12.2", "rs-13", "rs-15", "rucs",
				/*Schematy 400V*/ 
				"rnn-3.2", "rnn-4.3", "rnn-10.3", "rnn-11.3", "rnn-14.3", "rnn-16.3", "rnn-18.3", "rob-1", "rop-41", "rpwg", "irnn-3.3", "iirnn-3.3",
				/*Schematy 230V*/
				/*Biurowiec*/
				"TG łącznik biurrowca", "ster. urządzeń palarni", "rki-1", "rki-2", "rki-3", "rob-1.1", "rob-1.2", "rob-1.3", "rob-1.4", "rob-1.5",
				"tk-1", "tk-2", "tk-3", "tk-4", "tk-5", "tk-6", "tk-7", "tk-8", "zasil. urządzeń palarni",
				/*Kwasy ROMF*/
				"rmo-p1.1(r-1)", "rmo-p1.2(r-2)", "rfo-of", "rmf-spo", "rmo-oh", "rmo-oh1", "rmo-oz", "rmo-p", "romk", "romk-1.1", "rs", "rw", "rwc",
				/*Magazyn odczynnków*/
				"rog-1", "rog-2", "rog-3", "rog-4", "rog-5", "rog-6", "szafa ca1", "szafa ca2", "szafa ca3", "szafa ca4", "szafa cap-1,2,3",
				/*RNN-4.3*/
				"rop-51","rop-51.1", "rop-51.2", "rop-51.3", "rop-51.4", "rop-51.5", "rop-51.6", "row-2", "row-3.1",
				/*Flotacja*/      
				"irof-1.1", "irof-1.2", "irof-1.3", "irof-1.4", "irof-1.5", "irof-2.1", "irof-2.2", "irof-2.3", "irof-2.5", "irof-3.1", "irof-3.1.1", 
				"irof-3.1.3", "irof-3.1.4", "irof-9", "irof-10", "irosf ster. I etap poz. hydrocykl.", "ro-11.2", "ro-11.3", "ro-12.2", "ros-ster. ośw.",
				"so1-r11", "so1-r12", "so2-r11", "so2-r12",
				"iirof-1", "iirof-1.1", "iirof-1.2", "iirof-1.3", "iirof-1.4", "iirof-1.5", "iirof-2", "iirof-2.1", "iirof-2.2", "iirof-2.3", "iirof-2.4",
				"iirof-4", "iirof-5", "iirof-6", "irof-51", "irof-51.1", "irof-51.2", "irof-51.3", "irof-51.1", "r-400/230 rozdz. automatyków",
				"ro-13.2", "ro-13.2/I", "ro-13.2/II", "ro-14.2", "ro-14.2/II", "ro-14.3", "ro-64",
				"3fiiiza", "iiirof-1 oraz iiirof-2", "iiirof-1.1", "iiirof-1.2", "iiirof-1.3", "iiirof-1.4", "iiirof-2.1", "iiirof-2.2", "iiirof-2.3",
				"iiirof-2.4", "iiirof-4", "iiirof-7", "iiirof-8", "iiirof-11.1", "iiirof-11.2", "iiirof-13", "iiirof-51", "iiirof-51.1.1", "iiirof-51.1",
				"ro-16.2", "ro-16.2/i", "ro-16.2/ii", "ro-16.3", "ro-17.2/ii",
				/*Młynownia*/
				"irom-1.1", "irom-1.2", "irom-1.3", "irom-1.4", "irom-2.1", "irom-2.2", "irom-2.3", "irom-3", "irom-3.1", "irom-3.1.1", "irom-3.2", 
				"irom-3.2.1", "irom-3.2.2", "irom-3.4", "irom-3.4.1", "irom-3.4", "irom-3.5", "irom-3.5.1", "irom-3.6", "irom-6", "irom-9", "irom-9.1.1", 
				"irom-9.1", "irom-9.3", "irom-9.3.3", "irom-9.3.4", "irom-9.3.5", "irom-9.4", "irom-9.5", "irom-9.6", "irom-10", "irom-10.1.1", "irom-10.1", 
				"irom-10.1.2", "irom-10.3", "irom-10.3.3", "irom-10.3.4", "irom-10.3.5", "irom-10.4", "irom-11", "irom-12", "irom-12.1", "irom-12.2", 
				"irom-12.3", "irom-12.4", "irom-12.5", "irom-12.6", "irom-12.6.1", "irom-12.7", "irom-13",
				"iirom-1", "iirom-1.1", "iirom-1.2", "iirom-1.3", "iirom-2", "iirom-2.1", "iirom-2.2", "iirom-2.3", "iirom-2.4", "iirom-3",   
				"iirom-4", "iirom-5", "iirom-7", "iirom-8", "iirom-9", "iirom-12", "iirom-12.1", "iirom-12.2", "iirom-12.3.1", "iirom-12.3.2",
				"iirom-12.3.3", "iirom-12.3.4", "iirom-12.3", "iirom-12.4", "iirom-12.4.1", "iirom-12.5", "iirom-12.5.3", "iirom-12.5.4", "iirom-12.5.5",  
				"iirom-12.6", "iirom-12.7", "iirom-14", "iirom-14.1", "iirom-14.2", "iirom-14.2.1", "iirom-14.2.2", "iirom-14.3", "iirom-14.3.3", "iirom-14.3.4",
				"iirom-14.3.5", "iirom-14.4", "irom-51", "irom-51.1", "irom-51.1.3", "irom-51.1.4", "irom-51.1.5", "irom-51.2", "irom-51.2.1", "irom-51.2.3",
				"irom-51.2.4", "irom-51.2.5", "irom-51.2.6", "irom-51.2.7", "irom-51.3", "irom-51.3.1", "irom-51.3.2", "irom-51.3.3", "irom-51.4", "irom-51.5",
				"irom-52",
				"iiirom-1 i iiirom-2", "iiirom-1.1", "iiirom-1.2", "iiirom-1.3", "iiirom-1.4", "iiirom-2.1", "iiirom-2.2", "iiirom-2.3", "iiirom-8",      
				"iiirom-8.1", "iiirom-8.2", "iiirom-9", "iiirom-9.1", "iiirom-9.2", "iiirom-9.3", "iiirom-9.3.1", "iiirom-9.3.4", "iiirom-9.3.5", "iiirom-9.3.6",
				"iiirom-9.3.7", "iiirom-9.4", "iiirom-9.5", "iiirom-11", "iiirom-11.1", "iiirom-11.2", "iiirom-11.2.3", "iiirom-11.2.4", "iiirom-11.2.5",
				"iiirom-12", "iiirom-12.1", "iiirom-12.2", "iiirom-13", "iiirom-13.2", "iiirom-14", "iiirom-15", "row-51", "tw-wartownia",
				/*Nowe CPO*/
				"rop-2", "rop-1.3", "rop-1.3.1", "rop-1.3.2", "rop-1.3.3", "rop-1.4", "rop-1.6", "rop-1.6.2", "rop-1.12", "rop-41.1", "rop-41.2",
				"rop-41.3", "rop-41.4", "zr-7",
				/*Rozdrabialnia*/
				"ror-1", "ror-1.1", "ror-1.2", "ror-1.1.1", "ror-1.1.4", "ror-1.1.5", "ror-1.1.6", "ror-1.1.7", "ror-1.1.8", "ror-1.1.9", "ror-1.2.1",
				"ror-1.2.3", "ror-1.2.5", "ror-1.2.6", "ror-1.2.8", "ror-1.2.9", "ror-1.3", "ror-1.3.1", "ror-1.3.2", "ror-1.3.3", "ror-1.3.4",
				"ror-1.4", "ror-1.4.1", "ror-1.4.2", "ror-1.4.3", "ror-1.4.4", "ror-1.4.5", "ror-1.5.1", "ror-1.5", "ror-1.6", "ror-2", "ror-9",
				"ror-9.1", "ror-9.4", "ror-2 skrzynka zasil. ośw. zewnętrzengo", "rk-rozdzielnia kontenera", "zor-17", "ror-18", "ror-18.4", "ror-18.4.1.2",
				"ror-18.3", "ror-18.3.1", "ror-17", "ror-16", "ror-16.1", "ror-16.1.3 sterownik t15 i t16", "ror-16.1.2", "ror-16.1.1", "ror-15", "ror-15.4",
				"ror-15.2", "ror-15.2.1", "ror-15.1", "ror-15.1.1", "ror-15.1.1.2",
				/*rozdz. team*/
				"team", "ro-1(team)", "rs-1(team)", //do poprawy TODO   
				/*WR warsztaaty główne*/
				"rog-wr", "tablica to", "tablica tr1", "tablica tr2",
				/*magazyny główne*/
				"ror-1.2.11", "ror-1.2.11.1", "ror-1.2.11.2", "ror-1.2.11.3", "ror-1.2.11.4", "ror-1.2.11.5", "ror-1.2.11.6",
				/*Suszarnia*/
				"ros-17.2", "ros-33.1", "ros-38.1", "ros-1", "ros-2", "ros-3", "ros-4", "ros-5", "ros-6", "ros-7", "ros-8", "ros-9", "ros-10", "ros-11", "ros-12",
				"ros-13", "ros-14", "ros-14.1", "ros-15", "ros-16", "ros-16.1", "ros-16.2", "ros-16.2.1", "ros-16.2.2", "ros-16.2.3", "ros-17", "ros-17.1",
				"ros-17.3", "ros-21", "ros-22", "ros-23", "ros-24", "ros-25", "ros-26", "ros-27", "ros-28", "ros-29", "ros-30", "ros-31", "ros-32", "ros-32.1",
				"ros-32.2", "ros-32.3", "ros-33", "ros-34", "ros-34.1", "ros-35", "ros-36", "ros-37", "ros-37.1", "ros-38", "ros-39",
				/*Szafy potrzeb własnych*/
				/*Flotacja*/
				"ispwf", "rmw-pw-flotacja", "fiza", "rpw-11.2", "rpw-11.3", "rpw-12.2", "rpw-12.2/i",
				"iispwf-ii", "fiiza", "rpw-13.2", "rpw-13.2/i", "rpw-13.2/ii", "rpw-14.2", "rpw-142./ii", "rpw-14.3", "rpw-64 ii etap", "sssp",
				"iiispwf", "fiiiza i 2fiiiza", "rpw-16.2", "rpw-16.2/ii", "rpw-16.3", "rpw-17.2", "rpw-17.2/ii",
				/*kwasy*/
				"rmf-pw", "rmk-pw",
				/*Młynownia*/
				"ispwm-1.1", "ispwm-1.1", "ispwm-11", "ispwm-12", "m1za", "rss-1", 
				"2m2za", "iispwm-1.1", "iispwm-1.2", "iispwm-1", "m2za",
				"iiirgm", "iiispwm-1", "m3za", "rpw-16.1", "rpw-17.1",
				/*Przepompownia wód dołowych*/
				"rpw",
				/*Przepompownia*/
				"spwp-1", "spwp-1.1",
				/*Rozdrabialnia*/
				"spwr", "spwr-1.2", "rps-3.3/1 i 2", "convis cvp01-szr01.01", "convis cvp01-szr01.02", "convis cvp01-szr01.03", "convis cvp01-szr01.04", 
				"convis cvp01-szr01.05", "convis cvp01-szr01", "mapa wysp convis", 
				/*Suszarnia*/
				"spws-1", "spws-1.1", "spws-1.2", 
				/*Urządzenia*/
				/*6kV*/
				"mk-111", "mk-112", "mk-121", "mk-122", "mk-131", "mk-132", "md-113", "md-123", "md-133", "md-143", "ks-101", 
				"mk-211", "mk-212", "mk-221", "mk-222", "mk-231", "mk-232", "md-213", "md-223", "md-233", "md-243", "ks-102",
				"mk-311", "mk-321", "mk-331", "mk-341", "md-313", "md-323", "md-333", "ks-301", "sf-4" ]
}
	
export default variables;


let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/projects/site
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 data/posts/0065-slug.md
badd +88 data/posts/0064-engineering-portfolio-management-part1.md
badd +57 ~/second-brain/projects/mem-book/engineering-portfolio-management.md
badd +1 data/posts/0065-engineering-portfolio-management-part2.md
badd +39 frontend/src/routes/(site)/posts/\[post]/+page.svelte
badd +1 frontend/src/lib/renderers/TableRender.svelte
argglobal
%argdel
$argadd data/posts/0065-slug.md
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit ~/second-brain/projects/mem-book/engineering-portfolio-management.md
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 112 + 112) / 225)
exe 'vert 2resize ' . ((&columns * 112 + 112) / 225)
argglobal
balt data/posts/0065-engineering-portfolio-management-part2.md
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 57 - ((54 * winheight(0) + 27) / 55)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 57
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("data/posts/0065-engineering-portfolio-management-part2.md", ":p")) | buffer data/posts/0065-engineering-portfolio-management-part2.md | else | edit data/posts/0065-engineering-portfolio-management-part2.md | endif
if &buftype ==# 'terminal'
  silent file data/posts/0065-engineering-portfolio-management-part2.md
endif
balt ~/second-brain/projects/mem-book/engineering-portfolio-management.md
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 27) / 55)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 112 + 112) / 225)
exe 'vert 2resize ' . ((&columns * 112 + 112) / 225)
tabnext
edit frontend/src/routes/(site)/posts/\[post]/+page.svelte
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 112 + 112) / 225)
exe 'vert 2resize ' . ((&columns * 112 + 112) / 225)
argglobal
balt frontend/src/lib/renderers/TableRender.svelte
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 41 - ((40 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 41
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("frontend/src/lib/renderers/TableRender.svelte", ":p")) | buffer frontend/src/lib/renderers/TableRender.svelte | else | edit frontend/src/lib/renderers/TableRender.svelte | endif
if &buftype ==# 'terminal'
  silent file frontend/src/lib/renderers/TableRender.svelte
endif
balt frontend/src/routes/(site)/posts/\[post]/+page.svelte
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 112 + 112) / 225)
exe 'vert 2resize ' . ((&columns * 112 + 112) / 225)
tabnext 2
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
